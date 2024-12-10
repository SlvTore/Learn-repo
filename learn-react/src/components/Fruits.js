const Fruits = (props) => {
    return ([
        <div>
            {props.fruits.map(f => (<p key={f.id}>{f.fruitsname}</p>))};
        </div>
    ]);
}

export default Fruits