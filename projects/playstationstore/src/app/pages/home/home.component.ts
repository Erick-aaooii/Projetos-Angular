import { Component } from '@angular/core';
import { BigcardComponent } from "../../shared/bigcard/bigcard.component";
import { SmallcardComponent } from "../../shared/smallcard/smallcard.component";

@Component({
  selector: 'app-home',
  imports: [ BigcardComponent, SmallcardComponent ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  link = "https://www.techspot.com/images2/news/bigimage/2022/04/2022-04-14-image-15.jpg"

  games = [
    {
      name: "Astro Bot",
      img: "https://image.api.playstation.com/pr/bam-art/179/741/acd823c7-aedf-41a6-ab02-c159d6d94fa7.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "Spider-Man 2",
      img: "https://image.api.playstation.com/pr/bam-art/176/978/c5e7e0d7-0e08-45d8-a273-dbfee9b1e259.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "Rise Of The Ronin",
      img: "https://image.api.playstation.com/pr/bam-art/174/047/8a28b094-4d8b-4854-a841-e54d59c6fdb0.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "HellDivers 2",
      img: "https://image.api.playstation.com/pr/bam-art/199/969/4cad94fc-eb70-49ef-bb3c-6235514a38d9.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "Horizon Adventures",
      img: "https://image.api.playstation.com/pr/bam-art/196/165/48cc2d68-449b-461c-8583-6fbd71ea0c47.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "NBA 2K25 Edição Tournament",
      img: "https://image.api.playstation.com/pr/bam-art/194/344/6ce75216-5528-4ce4-be70-61829a547426.jpg?w=440&thumb=false",
      link: ""
    },
    {
      name: "Call of Duty®",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2502/d47cf917430169caffbc369bd8205a3f328aeef6f2505976.png?w=440&thumb=false",
      link: ""
    },
    {
      name: "Fortnite",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202502/1417/aae4af6a4b9105f64b31bfc176f3e492f8692b204b508865.png?w=440&thumb=false",
      link: ""
    }
  ]

  games2 = [
    {
      name: "Kingdom Come: Deliverance II",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202408/1208/05a84ce968125d79fa36484c5a756a1c8d9b05622aae21c1.png?w=230&thumb=false",
      link: ""
    },
    {
      name: "Like a Dragon: Pirate Yakuza in Hawaii",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202408/1401/5cbfb4502807fef739169f7e9bdd0cd615d7a86ce4e6af82.png?w=230&thumb=false",
      link: ""
    },
    {
      name: "Sid Meier's Civilization® VII",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202408/1517/1a39449a9764397e1b35788ae248a672e20880c43e78182c.png?w=230&thumb=false",
      link: ""
    },
    {
      name: "Sniper Elite: Resistance",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202408/1309/05d041f5216b1cd55a4587729534ce8ac8c557877b4d1483.png?w=440&thumb=false",
      link: ""
    }
  ]
}
