export class galeria {
    constructor(img1, img2, img3, n) {
            this.img1 = img1;
            this.img2 = img2;
            this.img3 = img3;
            this.n = n;
    }
// commit
    
    proximo(){

        console.log(this.n)

        if (this.n == 1){

            document.getElementById(this.img1).setAttribute("src", "images/"+this.img2+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img3+".png"); 
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img1+".png");
    
            this.n = this.n + 1;
            
        } else if (this.n == 2){
            
            document.getElementById(this.img1).setAttribute("src", "images/"+this.img3+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img1+".png"); 
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img2+".png");
    
            this.n = this.n + 1;
            
        } else if (this.n == 3){
    
            document.getElementById(this.img1).setAttribute("src", "images/"+this.img1+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img2+".png");     
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img3+".png");
    
            this.n = 1;

        }
    }
    
    anterior(){
        
        console.log(this.n);


        if (this.n == 3 || this.n > 3){

            document.getElementById(this.img1).setAttribute("src", "images/"+this.img2+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img3+".png"); 
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img1+".png");
    
            this.n = this.n - 1;
            
        } else if (this.n == 2){
            
            document.getElementById(this.img1).setAttribute("src", "images/"+this.img3+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img1+".png"); 
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img2+".png");
    
            this.n = this.n - 1;
            
        } else if (this.n == 1 || this.n < 1){
    
            document.getElementById(this.img1).setAttribute("src", "images/"+this.img1+".png");
            document.getElementById(this.img2).setAttribute("src", "images/"+this.img2+".png");     
            document.getElementById(this.img3).setAttribute("src", "images/"+this.img3+".png");
    
            this.n = 3;
        
        }
    }

}