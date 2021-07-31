export default function DateTime({ value }) {
    const date = new Date(value);
    const opt = { year: 'numeric', month: 'long', day: 'numeric' };
    const display = new Intl.DateTimeFormat('en-US', opt).format(date); //"January 02, 2006"

    return (
        <time dateTime={date.toISOString()}>
            <i className="fa fa-clock-o"></i>{' '}
            {display}
        </time>
    );
}
