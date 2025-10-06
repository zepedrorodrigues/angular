import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent {
  @Input() link!: Link;

  constructor(private linkService: LinkService) {}

  onLinkClick(): void {
    this.linkService.trackClick(this.link.id);
    window.open(this.link.url, '_blank');
  }
}