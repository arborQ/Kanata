using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            byte b = 1;
            dynamic d = b;

            Console.WriteLine(d.GetType());
            Console.WriteLine(d);
            d += "dsa";
            Console.WriteLine(d.GetType());
            Console.WriteLine(d);
        }
    }
}
