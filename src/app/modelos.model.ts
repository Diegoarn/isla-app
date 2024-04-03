export class Books {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    constructor( title: string, author: string,
        description: string,
        imageUrl: string ) {
           this.title = title,
           this.author = author,
           this.description = description,
           this.imageUrl = imageUrl 
        }
}