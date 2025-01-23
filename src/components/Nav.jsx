const Nav = function () {
  return (
    <nav>
      <ul>
        <li className="active">Politics</li>
        <li>World</li>
        <li>Economy</li>
        <li>Science & Tech</li>
        <li>Business</li>
        <li>Travel</li>
        <li>Climate</li>
        <li>Lifestyle</li>
        <li>Food</li>
        <li>Sport</li>
      </ul>
      <div>
        <span>13:40</span>
        <span>
          <img src="./weather.png" alt="" />
          24 &deg;C
        </span>
      </div>
    </nav>
  );
};
export default Nav;
