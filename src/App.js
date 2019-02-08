import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ProductsList,
  ProductCard,
} from './components'
import { Header, Container, CssReset, GlobalCss, Themes } from '@monorepo-demo/monorepo_demo-design_system';

export default () => {
  return (
    <ThemeProvider theme={Themes.default}>
      <div>
        <CssReset />
        <GlobalCss />

        <Header />
        <Container>
          <ProductsList>
            <ProductCard
              name="This is a product"
              image="https://via.placeholder.com/150?text=Product image"
            />
            <ProductCard
              name="This is a product too"
              image="https://via.placeholder.com/150?text=Product image"
            />
          </ProductsList>
        </Container>
      </div>
    </ThemeProvider>
  );
}
