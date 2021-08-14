import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayParagraph = true;
  count = 1;
  timesClicked: Date[] = [];

  onToggleParagraph() {
    this.displayParagraph = !this.displayParagraph;
    // this.timesClicked.push(this.count++);
    this.timesClicked.push(new Date());
  }

  getBackground(item: number) {
    return item > 4 ? 'blue' : '';
  }
}
