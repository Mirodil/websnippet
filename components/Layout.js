import LeftMenu from './LeftMenu';
import SubscribeForm from './SubscribeForm';
import Categories from './Categories';
import TagList from './TagList';

export default function Layout({ categories, tags, children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <LeftMenu />
                </div>
                <div className="col-md-6">{children}</div>
                <div className="col-md-3">
                    <SubscribeForm />
                    <Categories categories={categories} />
                    <TagList tags={tags} />
                </div>
            </div>
        </div>
    );
}
