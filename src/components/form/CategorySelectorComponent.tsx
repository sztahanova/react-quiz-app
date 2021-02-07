import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { QUIZ_CATEGORY_API } from "../../quizApi";
import useFormControlStyle from './FormControlStyle';

type Category = {
  id: number;
  name: string;
};

type CategoryResult = {
  trivia_categories: Category[];
};

type CategorySelectorProps = {
  selectedCategoryID: number;
  setSelectedCategoryID: (categoryID: number) => void;
};

const CategorySelector = (props: CategorySelectorProps) => {
  const style = useFormControlStyle();
  const { selectedCategoryID, setSelectedCategoryID } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const AllCategory: Category = { id: 0, name: "All" };

  useEffect(() => getCategories(), []);
  const getCategories = useCallback(() => {
    setLoading(true);

    fetch(QUIZ_CATEGORY_API)
      .then((res) => res.json())
      .then((res: CategoryResult) => {
        console.log(res);
        console.log(res.trivia_categories);
        setCategoryList(res.trivia_categories);
      });

    setLoading(false);
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCategoryID(event.target.value as number);
  };

  return (
    <FormControl variant='outlined' color='primary' className={style.formControl}>
      <InputLabel id="category-selector-label">Category</InputLabel>
      <Select
        labelId="category-selector-label"
        id="category-selector"
        label='Category'
        disabled={loading}
        value={selectedCategoryID === undefined ? "" : selectedCategoryID}
        onChange={handleChange}
      >
        {[AllCategory, ...categoryList].map((category) => {
          return <MenuItem value={category.id}>{category.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CategorySelector;
