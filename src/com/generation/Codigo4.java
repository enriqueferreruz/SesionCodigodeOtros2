package com.generation;

import java.util.Scanner;

public class Codigo4 {
	
	public static void main(String[] args) {//se añade método main
		
		 Scanner s = new Scanner(System.in);//se añade system.in
		    
		    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		    String j1 = s.nextLine();
		    
		    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		    Scanner s2 = new Scanner(System.in);
		    String j2 = s.nextLine();
		    
		    
		    if (j1.equals (j2)) {//en JAVA se usa .equals
		      System.out.println("Empate");
		    } else {
		      int g = 2;
		      switch(j1) {
		        case "piedra":
		          if (j2.equals ("tijeras") ) { // con == no arrojaba bien la lógica, y tijeras podía ganarle a piedra, por ejemplo
		            g = 1;
		          }
		          break;//se agrega break

		        case "papel":
		          if (j2.equals ("piedra") ) {
		            g = 1;
		          }break; //se agrega break
		        case "tijera":
		          if (j2.equals("papel")) {
		            g = 1;
		          }
		          break;
		        default:
		      }s.close();
		      System.out.println("Gana el jugador " + g);
		    }//switch
		    s.close(); //se añade para cerrar scaner
		  
		  
		}//if
	}//main

   
//classCodigo
    