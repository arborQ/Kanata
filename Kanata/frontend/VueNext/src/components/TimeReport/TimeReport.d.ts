declare module TimeReport {
    export interface IDayData {
        day: Date;
    }

    export interface IProjectData {
        projectName: string;
        projectId: number;
    }

    export interface ITimeReportData {
        days: IDayData[];
        projects: IProjectData[];
    }
}