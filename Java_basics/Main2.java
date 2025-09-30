package Java_basics;


class Main2{

    //INSTANCE VARIABLE
    byte myByte = -128;
        short myShort = 32767;
        int myInt = 99_99_99_99_9;
        long myLong = 77_77_77_77_77_77_77_88_99L;
    public static void main(String[] args){

        Main2 m1 = new Main2();  //Object Creation ---> Makes instance variable accessible 

        
        //LOCAL VARIABLES
        boolean myboolean=true; //variable declaration and initialization
        float myFloat = 1234567.5678F;
        double myDouble = 12345_678_789_798_67_666_666.678905;
        char myChar = 'A';
        myChar = 'a'; //update allowed
        // byte myChar = 125;  datatype update not allowed

        //datatype _name -->correct
                // $name -->correct
                // 1name -->wrong

        System.out.println("myboolean: "+myboolean);
        System.out.println("myByte: "+m1.myByte);
        System.out.println("myShort: "+m1.myShort);
        System.out.println("myInt: "+m1.myInt);
        System.out.println("myLong: "+m1.myLong);
        System.out.println("myFloat: "+myFloat);
        System.out.println("myDouble: "+myDouble);
        System.out.println("myChar: "+myChar);
    }
}