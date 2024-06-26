import { useEffect, useState } from 'react';

const baseUrl = 'https://newsroom.eclipse.org/api';

export function fetchNewsItems(
    isVisible: boolean,
    page: number,
): News | null {
    const [news, setNews] = useState<NewsResponse>({news: [], pagination: null});
    const [events, setEvents] = useState<EventItem[]>([]);
    useEffect(() => {
        if (isVisible) {
        (async () => {
            setNews(await fetchLatestNews(page));
            setEvents(await fetchLatestEvents());
        })();
        }
    }, [isVisible, page]);

    const newsAndEvents: News = {
        news: news,
        events: events
    }

    return newsAndEvents;
}

async function fetchLatestNews(page) {
    const url = new URL(`${baseUrl}/news`);
    url.searchParams.append('parameters[publish_to]', 'adoptium');
    url.searchParams.append('page', page);
    url.searchParams.append('pagesize', '5');
    const response = await fetch(url);
    const json = (await response.json());
    return json
}

async function fetchLatestEvents() {
    const url = new URL(`${baseUrl}/events`);
    url.searchParams.append('parameters[publish_to]', 'adoptium');
    const response = await fetch(url);
    const json = (await response.json());
    return json.events
}

export interface News {
    news: NewsResponse;
    events: EventItem[];
}

export interface NewsResponse {
    news: NewsItem[];
    pagination: {
        page: number;
        pagesize: number;
        result_start: number;
        result_end: number;
        result_size: number;
        total_result_size: number;
    } | null;
}

export interface NewsItem {
    id: string;
    title: string;
    body: string;
    date: Date;
    link: URL;
}

export interface EventItem {
    id: string;
    title: string;
    infoLink: URL;
    date: Date;
}

export interface EventAPI {
    events: EventItem[];
}
