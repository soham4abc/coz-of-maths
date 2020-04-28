import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../article.service';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private titleService: Title,
    private sharedService: SharedService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.blogtitle}`);

    this.getArticles();
  }
  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
