import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greetingSlice";

const Greeting = (props) => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    const fetched = dispatch(fetchGreeting());
  }, [dispatch]);

  return <h1>Greeting:{greeting.greeting}</h1>;
};

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default Greeting;
