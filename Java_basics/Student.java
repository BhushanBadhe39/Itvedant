package Java_basics;

public class Student {

    byte rollNo;   // just declaring without value will make it 0
    String name = "Bhushan";    //For string it will be null
    char grade = 'A';
    double percentage = 99.83;
    long phoneNo = 9067243787L;
    boolean isSmart= true;
    public static void main(String[] args) {

        Student bhushan = new Student();

        System.out.println("Roll number: "+ bhushan.rollNo);
        System.out.println("Name: "+ bhushan.name);
        System.out.println("Grade: "+ bhushan.grade);
        System.out.println("Percentage: "+ bhushan.percentage);
        System.out.println("Phone number: "+ bhushan.phoneNo);
        System.out.println("Is he Smart?: "+ bhushan.isSmart);
    }
}
