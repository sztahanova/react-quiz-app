import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QUIZ_CATEGORY_API } from "../../quizApi";
import { setCategoryID } from "../../store/actionCreators";
import { QuizFormState } from "../../types/type";
import useFormControlStyle from "./FormControlStyle";

type Category = {
  id: number;
  name: string;
};

type CategoryResult = {
  trivia_categories: Category[];
};

const CategorySelector = () => {
  const dispatch = useDispatch();
  const style = useFormControlStyle();

  const [loading, setLoading] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const selectedCategoryID = useSelector((state: QuizFormState) => state.categoryID);
  const setSelectedCategoryID = useCallback((categoryID: number) => dispatch(setCategoryID(categoryID)), [dispatch]);

  const AllCategory: Category = { id: 0, name: "All" };

  const getCategories = useCallback(() => {
    setLoading(true);

    fetch(QUIZ_CATEGORY_API)
      .then((res) => res.json())
      .then((res: CategoryResult) => {
        setCategoryList(res.trivia_categories);
        setLoading(false);
      });
  }, []);
  useEffect(() => getCategories(), [getCategories]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCategoryID(event.target.value as number);
  };

  return (
    <FormControl variant="outlined" color="primary" className={style.formControl}>
      <InputLabel id="category-selector-label">Category</InputLabel>
      <Select
        labelId="category-selector-label"
        id="category-selector"
        label="Category"
        disabled={loading}
        value={selectedCategoryID === undefined ? "" : selectedCategoryID}
        onChange={handleChange}
      >
        {[AllCategory, ...categoryList].map((category) => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategorySelector;
