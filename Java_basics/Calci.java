package Java_basics;
public class Calci {

    int a,b;

    //instance function
    void addition(){
        a=10;
        b=20;
        System.out.println("Addition= "+ (a+b));
    }

    public static void main(String[] args) {
        
        Calci a1 = new Calci();
        a1.addition();    //function call
    }
}
