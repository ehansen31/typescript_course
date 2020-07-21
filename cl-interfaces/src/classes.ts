abstract class Department {
    static fiscalYear = 2020;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
        Department.fiscalYear;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;
    // {
    //     console.log('Department: ' + this.name);
    // }

    addEmployee(employee: string) {
        // this.id = '3';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// let interior = new Department('d1', 'interior');

// interior.addEmployee('joe');
// interior.addEmployee('brian');
// interior.describe();
// interior.printEmployeeInformation();


// const interiorCopy = { describe: interior.describe };
// interiorCopy.describe();

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'it');
        this.admins = admins;
    }
    describe() {
        return;
    }
}

new ITDepartment('1337', ['erik']);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found.');
    }

    set mostRecentReport(value: string) {
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'erik') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports);
    }

    describe() {
        console.log();
    }

    // singleton
    static getInstance(): AccountingDepartment {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
}

// let accounting = new AccountingDepartment('d2', []);
let accounting = AccountingDepartment.getInstance();


accounting.mostRecentReport = '';

Math.PI;

Department.createEmployee('etrain');



