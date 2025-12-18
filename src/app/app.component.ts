import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabsComponent } from "./tabs/tabs.component";
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent,RouterLink,BookmarksComponent,NotesComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
