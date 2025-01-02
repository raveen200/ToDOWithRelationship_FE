import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_ID,
} from "./service/CategoryService";

function App() {
  const [categories, setCategories] = useState(null);

  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await GET_ALL_CATEGORIES();
      setCategories(response.data);
    };
    const fetchId = async () => {
      const response = await GET_CATEGORY_BY_ID(1);
      console.log(response.data);
    };
    fetchId();

    fetchCategories();
  }, []);

  const tickHandler = () => {
    console.log("tick");
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
      </ul>
      <button onClick={tickHandler}>Tick</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="denvo@example.com"
            {...register("email", { required: true })}
          />
        </div>

        <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
