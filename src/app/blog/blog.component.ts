import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      title: 'Implementing Micro Frontends with Next.js: A Real-World Experience',
      summary: 'Micro Frontends are increasingly being adopted to enable scalable and flexible frontend development....',
      url: 'https://www.mindfiresolutions.com/blog/author/debiprasad-dash/',
      image: 'blog1.png',
    },
    {
      title: 'Node.js Design patterns',
      summary: 'In Node.js applications, several design patterns are commonly followed to improve code organization.....',
      url: 'https://medium.com/@debiprasaddash_35810/node-js-design-patterns-8969d9184e37',
      image: 'blog2.png',
    },
    {
      title: 'Kubernetes Pods with Docker vs. Hypervisor: Pros, Cons, and Use Cases',
      summary: 'Kubernetes has become the go-to platform for container orchestration, managing clusters, and deploying scalable applications...',
      url: 'https://medium.com/@debiprasaddash_35810/comparing-popular-webrtc-libraries-amazon-chime-azure-communication-service-opentok-twilio-ef43d807e8a6',
      image: 'blog3.png',
    },
    {
      title: 'Comparing Popular WebRTC Libraries: Amazon Chime, Azure Communication Service, OpenTok, Twilio, and Jitsi',
      summary: 'WebRTC (Web Real-Time Communication) libraries are essential for building applications that require audio, video, and data sharing capabilities in real time. In this article, we compare five popular WebRTC libraries...',
      url: 'https://medium.com/@debiprasaddash_35810/comparing-popular-webrtc-libraries-amazon-chime-azure-communication-service-opentok-twilio-ef43d807e8a6',
      image: 'blog4.png',
    },

  ];
  title = 'Tech Blog | Debiprasad Dash';
  description = 'Deep dives into web development, programming best practices, performance optimization, and real-world engineering challenges by Debiprasad Dash.';
  constructor(private router: Router, private titleService: Title, private metaService: Meta) {
    console.log(router)
  }

   ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({ name: 'description', content: this.description });
  }



}
