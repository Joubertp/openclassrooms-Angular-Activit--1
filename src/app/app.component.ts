import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-premier-projet'

  posts = [
    {
      title: 'Un commentaire',
      content: "L'intérêt d'utiliser Angular est de pouvoir gérer le DOM (Document Object Model : les éléments HTML affichés par le navigateur) de manière dynamique, et pour cela, il faut utiliser la liaison de données, ou 'databinding'.",
      loveIts: -1,
      date: new Date()
    },
    {
      title: 'Un autre commentaire',
      content: "Le databinding, c'est la communication entre votre code TypeScript et le template HTML qui est montré à l'utilisateur.  Cette communication est divisée en deux directions :",
      loveIts: 0,
      date: new Date()
    },
    {
      title: 'Un dernier commentaire',
      content: "Il existe également des situations comme les formulaires, par exemple, où l'on voudra une communication à double sens : on parle donc de 'two-way binding'.",
      loveIts: 1,
      date: new Date()
    }
  ]

}
