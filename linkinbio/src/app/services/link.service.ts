import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linksSubject = new BehaviorSubject<Link[]>([
    {
      id: '1',
      title: 'My Portfolio',
      url: 'https://portfolio.example.com',
      icon: '🌐',
      isActive: true,
      clickCount: 42,
      order: 1
    },
    {
      id: '2',
      title: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: '🐙',
      isActive: true,
      clickCount: 28,
      order: 2
    },
    {
      id: '3',
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: '💼',
      isActive: true,
      clickCount: 15,
      order: 3
    },
    {
      id: '4',
      title: 'Blog',
      url: 'https://blog.example.com',
      icon: '✍️',
      isActive: true,
      clickCount: 8,
      order: 4
    }
  ]);

  links$ = this.linksSubject.asObservable();

  getLinks(): Link[] {
    return this.linksSubject.value.filter(link => link.isActive)
      .sort((a, b) => a.order - b.order);
  }

  addLink(link: Omit<Link, 'id' | 'clickCount'>): void {
    const newLink: Link = {
      ...link,
      id: Date.now().toString(),
      clickCount: 0
    };
    const currentLinks = this.linksSubject.value;
    this.linksSubject.next([...currentLinks, newLink]);
  }

  trackClick(linkId: string): void {
    const links = this.linksSubject.value.map(link => 
      link.id === linkId 
        ? { ...link, clickCount: link.clickCount + 1 }
        : link
    );
    this.linksSubject.next(links);
  }
}