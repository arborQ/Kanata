using EasyModbus;
using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace AlphaProtocol
{
    class Program
    {
        static void Main(string[] args)
        {
            var server = ConnectModbus();

            while (true)
            {
                Console.WriteLine("Message option C - coil, R - register");
                var option = Console.ReadKey();
                if (option.Key == ConsoleKey.C)
                {
                    server.WriteSingleCoil(CoilIndex(), CoilValue());
                }
                else if (option.Key == ConsoleKey.R)
                {
                    server.WriteSingleRegister(CoilIndex(), RegisterValue());
                }else
                {
                    Console.WriteLine("Unknown option");
                }
            }
        }

        static int CoilIndex()
        {
            while (true)
            {
                Console.WriteLine("Set coil index:");
                var coilString = Console.ReadLine();
                int coilValue = 0;
                if (int.TryParse(coilString, out coilValue) && coilValue < 256)
                {
                    return coilValue;
                }
            }
        }

        static int RegisterValue()
        {
            while (true)
            {
                Console.WriteLine("Set register value:");
                var coilString = Console.ReadLine();
                int coilValue = 0;
                if (int.TryParse(coilString, out coilValue))
                {
                    return coilValue;
                }
            }
        }

        static bool CoilValue()
        {
            while (true)
            {
                Console.WriteLine("Set coil value (1,0):");
                var coilString = Console.ReadKey();
                return coilString.Key != ConsoleKey.NumPad0;
            }
        }

        static ModbusClient ConnectModbus()
        {
            var connected = false;
            while (!connected)
            {
                var port = 502;
                Console.WriteLine("Server IP:");
                var ip = Console.ReadLine();
                Console.WriteLine($"Try connect: {ip}:{port}");
                try
                {
                    var client = new ModbusClient(ip, 502);
                    client.Connect();
                    connected = client.Available(100);
                    return client;
                }
                catch
                {

                }

                if (!connected)
                {
                    Console.WriteLine("Can't connect");
                }
            }

            return null;
        }

        static Socket Connect()
        {
            var server = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            Console.WriteLine("Ip:");
            var ipaddress = string.Empty;
            if (string.IsNullOrEmpty(ipaddress))
            {
                ipaddress = "192.168.1.102";
            }
            Console.WriteLine($"Ip: {ipaddress}");
            var ip = new IPEndPoint(IPAddress.Parse(ipaddress), 4545);
            server.Connect(ip);

            Console.WriteLine($"Connected: {server.Connected}");

            return server;
        }

        static string SendData(Socket server, string data)
        {
            byte[] byData = Encoding.Default.GetBytes(data);

            server.Send(byData, SocketFlags.None);

            byte[] bytesFrom = new byte[1025];
            int iRx = server.Receive(bytesFrom);

            string dataFromClient = Encoding.ASCII.GetString(bytesFrom);
            return dataFromClient.Substring(4, 4).ToString();
        }
    }
}
