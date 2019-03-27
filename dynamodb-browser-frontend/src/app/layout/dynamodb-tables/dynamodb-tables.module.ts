import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamodbTablesComponent } from './dynamodb-tables.component';
import { DynamodbTablesRoutingModule } from './dynamodb-tables-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DynamodbTablesRoutingModule,
        MatTableModule,
        MatTooltipModule,
        ReactiveFormsModule,
        FormsModule ],
    declarations: [ DynamodbTablesComponent ]
})
export class DynamodbTablesModule {}