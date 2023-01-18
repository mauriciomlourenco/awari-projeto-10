import ListItem from "../ListItem";
import './List.css';

const  List = ({ items }) => {
  const map = items.map((item) => {
    const { name, url } = item;
    return (
      <ListItem
          key={name}
          name={name}
          url={url}
      />
    );
  });

    return (
        <div className="list-wrapper">
            {map}
        </div>
    )
};

export default List;
