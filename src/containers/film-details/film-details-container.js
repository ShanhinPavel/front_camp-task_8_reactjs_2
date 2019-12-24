import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsDetailsAndFilmsByGenres } from '../../actions';
import styles from './detail-film-info.module.css';
import { Header } from './header-detail-film-info';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common/';
import { generateStringWithGenreFoundMovies } from '../../components/common/film-cards-summary';

export const FilmDetailsContainer = (props) => {
  const dispatch = useDispatch();
  const { filmDetails } = useSelector((state) => state);

  useEffect(() => {
    const { filmId } = props.match.params;
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [props.match.params]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary filmsSummary={generateStringWithGenreFoundMovies(filmDetails)} />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};
