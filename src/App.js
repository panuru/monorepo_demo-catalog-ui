import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CssReset, GlobalCss, Themes } from './style';
import {
  Header,
  Container,
  ProductsList,
  ProductCard,
} from './components'

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
