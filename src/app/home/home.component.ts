import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CertificationComponent } from '../certification/certification.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    ExperienceComponent,
    CertificationComponent,
    ContactsComponent,
    ProjectsComponent,
    SkillsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'Debiprasad Dash | Software Engineer';
  description = 'Debiprasad Dash is a passionate Software Engineer specializing in building scalable web applications, writing clean code, and solving real-world problems with technology.';

  constructor(private titleService: Title, private metaService: Meta) { }

    ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({ name: 'description', content: this.description });
  }
}
