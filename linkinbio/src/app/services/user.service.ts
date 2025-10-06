import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: '1',
    name: 'John Doe',
    bio: '🚀 Frontend Developer | 📱 Building amazing apps | ☕ Coffee enthusiast',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    theme: 'default'
  });

  user$ = this.userSubject.asObservable();

  updateUser(user: Partial<User>): void {
    const currentUser = this.userSubject.value;
    this.userSubject.next({ ...currentUser, ...user });
  }

  getUser(): User {
    return this.userSubject.value;
  }
}

// services/link.service.ts
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