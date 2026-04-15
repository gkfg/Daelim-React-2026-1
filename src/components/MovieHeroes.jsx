import {heroes} from './HeroesData'
export default function MovieHeroes() {
  const filterTests = heroes.filter(hero =>
    hero.name === "클라크 켄트"
  );
  const listHeroes = filterTests.map(hero =>
     <li>
      <p>{hero.name}의 배역은 {hero.casting}입니다</p>
      <p>{hero.casting}의 강함은 {hero.power}입니다 </p>
    </li>
  );
  return(
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>{listHeroes}</ul>
    </section>
  )
    
}