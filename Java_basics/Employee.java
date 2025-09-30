package Java_basics;
public class Employee {
    
    int bSalary=10000; //base salary
    int TA = 1000; //travel allowance
    int bonus =5000; //bonus salary

    void calsalary(){
        int grossSalary= bSalary+TA+bonus;
        System.out.println("Gross Salary is: " + grossSalary);
    }

    public static void main(String[] args) {
        String name="Bhushan";
        System.out.println(name);
        Employee A1= new Employee();
        A1.calsalary();
    }
}
