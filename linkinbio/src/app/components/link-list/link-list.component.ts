import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links$: Observable<Link[]>;

  constructor(private linkService: LinkService) {
    this.links$ = this.linkService.links$;
  }

  ngOnInit(): void {}

  get activeLinks(): Link[] {
    return this.linkService.getLinks();
  }

  trackByLinkId(index: number, link: Link): string {
    return link.id;
  }
}