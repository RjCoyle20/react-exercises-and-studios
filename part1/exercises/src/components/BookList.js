export default function BookList() {
   let pageTitle = "Need to Reads!";
   let book1 = "https://i.pinimg.com/originals/52/45/d6/5245d6437deb06f988f41cd9328a790b.jpg";
   let book2 = "https://www.psupress.org/images/covers/294wide/978-0-271-08231-8md_294.jpg";
   let book3 = "https://hannahdoublebarrel.files.wordpress.com/2013/03/picture-of-dorian.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Ugly 90s Version of The Hobbit" />
         <img src={book2} alt="Don Quixote of La Mancha" />
         <img src={book3} alt="The Picture of Dorian Gray" />
      </div>      
   );
}