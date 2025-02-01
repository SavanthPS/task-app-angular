import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { sharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [TaskComponent, NewTaskComponent, TasksComponent],
    exports: [TasksComponent],
    imports: [sharedModule, CommonModule, FormsModule]
})

export class TasksModule {}