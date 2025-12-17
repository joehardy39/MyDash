import { Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

export const routes: Routes = [
    {
        path:'bookmarks',
        component:BookmarksComponent
    },
    {
        path:'todo',
        component:TodoComponent
    },
    {
        path:'notes',
        component:NotesComponent
    },
    {
        path:'notes/add',
        component:AddNoteComponent
    }
];
