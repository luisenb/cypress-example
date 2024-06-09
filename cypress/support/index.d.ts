// cypress/support/index.d.ts  
declare namespace Cypress {   
  interface Chainable {     
 // Define the structure of your custom commands here
 /**
  * this will log the lan value
  * @param lan - defaul is gentuza mayor
  */    
  gentuza(lan: string): Chainable<Element>;     
 // Add more custom commands as needed   
  } 
 }