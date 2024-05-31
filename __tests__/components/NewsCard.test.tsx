import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {NewsCard} from '../../src/components';
import {NewsType} from '../../src/utils/types';

describe('NewsCard', () => {
  it('should render NewsCard with correct data', () => {
    const item: NewsType = {
      source: {
        id: null,
        name: 'Biztoc.com',
      },
      author: 'thestreet.com',
      title: "Fed official's latest thoughts upend rate cut chances",
      description:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday that he believes the Federal Reserve should not rush to to cut …',
      url: 'https://biztoc.com/x/cd008941cf07104b',
      urlToImage: 'https://c.biztoc.com/p/cd008941cf07104b/s.webp',
      publishedAt: '2024-05-29T11:06:06Z',
      content:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday tha… [+291 chars]',
    };

    render(
      <NavigationContainer>
        <NewsCard item={item} />
      </NavigationContainer>,
    );
    expect(screen.getByText(new RegExp(item.title))).toBeTruthy();
    expect(
      screen.getByText(
        new Date(item.publishedAt)?.toLocaleTimeString() +
          ' ' +
          new Date(item.publishedAt)?.toLocaleDateString(),
      ),
    ).toBeTruthy();
  });

  it('should render NewsCard with correct date time format', () => {
    const item: NewsType = {
      source: {
        id: null,
        name: 'Biztoc.com',
      },
      author: 'thestreet.com',
      title: "Fed official's latest thoughts upend rate cut chances",
      description:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday that he believes the Federal Reserve should not rush to to cut …',
      url: 'https://biztoc.com/x/cd008941cf07104b',
      urlToImage: 'https://c.biztoc.com/p/cd008941cf07104b/s.webp',
      publishedAt: '2024-05-29T11:06:06Z',
      content:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday tha… [+291 chars]',
    };

    render(
      <NavigationContainer>
        <NewsCard item={item} />
      </NavigationContainer>,
    );
    expect(
      screen.getByText(
        new Date(item.publishedAt)?.toLocaleTimeString() +
          ' ' +
          new Date(item.publishedAt)?.toLocaleDateString(),
      ),
    ).toBeTruthy();
  });

  it('should render NewsCard with split title', () => {
    const item: NewsType = {
      source: {
        id: null,
        name: 'Biztoc.com',
      },
      author: 'thestreet.com',
      title:
        "Fed official's latest thoughts upend rate cut chances Fed official's latest thoughts upend rate cut chances Fed official's latest thoughts upend rate cut chances",
      description:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday that he believes the Federal Reserve should not rush to to cut …',
      url: 'https://biztoc.com/x/cd008941cf07104b',
      urlToImage: 'https://c.biztoc.com/p/cd008941cf07104b/s.webp',
      publishedAt: '2024-05-29T11:06:06Z',
      content:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday tha… [+291 chars]',
    };

    render(
      <NavigationContainer>
        <NewsCard item={item} />
      </NavigationContainer>,
    );
    expect(screen.getByText(item.title.slice(0, 100) + '...')).toBeTruthy();
  });

  it('should render NewsCard with full text if less than 100 letter', () => {
    const item: NewsType = {
      source: {
        id: null,
        name: 'Biztoc.com',
      },
      author: 'thestreet.com',
      title: "Fed official's latest thoughts upend rate cut chances",
      description:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday that he believes the Federal Reserve should not rush to to cut …',
      url: 'https://biztoc.com/x/cd008941cf07104b',
      urlToImage: 'https://c.biztoc.com/p/cd008941cf07104b/s.webp',
      publishedAt: '2024-05-29T11:06:06Z',
      content:
        'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday tha… [+291 chars]',
    };

    render(
      <NavigationContainer>
        <NewsCard item={item} />
      </NavigationContainer>,
    );
    expect(screen.getByText(item.title)).toBeTruthy();
  });
});
