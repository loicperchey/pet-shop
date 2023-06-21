import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPet } from '../../model/pet';
import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  petList$: Observable<IPet[]> = this.petService.pets$.asObservable();

  constructor(private petService: PetService) {}

  ngOnInit(): void {}
}
