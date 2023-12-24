import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login() {
    // Vérifie si le nom d'utilisateur existe
    const user = this.userService.getUserByUsername(this.username);

    if (user) {
      // Vérifie si le mot de passe correspond (c'est une vérification très basique)
      if (user.password === this.password) {
        // Authentification réussie, redirige vers la page d'accueil
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Mot de passe incorrect';
      }
    } else {
      this.errorMessage = 'Nom d\'utilisateur introuvable';
    }
  }
}

