import { Injectable } from '@angular/core';

import { IPet, Species } from './model/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  pets: IPet[] = [];
  selectedPet: IPet | undefined | null = null;

  constructor() {
    this.createPets();
  }

  selectPet(petId: number): void {
    this.selectedPet = this.pets.find((pet) => pet.id === petId);
  }

  private createPets(): void {
    const names: string[] = ['milou', 'garfield', 'nemo', 'bugs bunny'];
    const species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];
    const prices: number[] = [500, 400, 10, 50];

    for (let i = 0; i < 4; i++) {
      const pet: IPet = {
        id: i + 1,
        name: names[i],
        species: species[i],
        price: prices[i],
        isAvailable: i % 2 === 0,
      };

      this.pets.push(pet);
    }
  }
}
