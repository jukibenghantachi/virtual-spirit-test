import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/actions';
import CardList from './components/CardList';
import CardPost from './components/CardPost';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducers);
  const [forms, setForms] = useState({
    title: '',
    description: '',
    userId: 1,
  });

  const onSubmitChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForms({ ...forms, [name]: value });
  };

  const onSubmitClick = () => {
    if (forms.title === '' || forms.description === '') {
      return alert('Please fill the forms!');
    }
    dispatch(postData({ body: forms }));
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <CardPost
        forms={forms}
        onSubmitChange={onSubmitChange}
        onSubmitClick={onSubmitClick}
      />
      <div className="d-flex flex-wrap justify-content-between">
        {state.data.length >= 0
          ? state.data.map((items) => (
              <CardList
                userId={items.userId}
                id={items.id}
                title={items.title}
                body={items.body}
              />
            ))
          : null}
      </div>
    </div>
  );
}
