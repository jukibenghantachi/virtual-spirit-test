import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/actions';
import CardList from './components/CardList';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducers);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
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
  );
}
