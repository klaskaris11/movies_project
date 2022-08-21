import React from 'react';
import { render } from "@testing-library/react";

import ListMovieDetail from './ListMovieDetail';

describe('ListMovieDetail Tests', () => {
    test("To have correct text contents", () => {
        const { getByTestId } = render(
            <ListMovieDetail
                title="Test Title"
                plot="Test Plot"
                director="Test Director"
                producer="Test Producer"
            />
        );
        expect(getByTestId("movie-title")).toHaveTextContent("Test Title");
        expect(getByTestId("movie-plot")).toHaveTextContent("Test Plot");
        expect(getByTestId("movie-director")).toHaveTextContent("Test Director");
        expect(getByTestId("movie-producer")).toHaveTextContent("Test Producer");
    })
});