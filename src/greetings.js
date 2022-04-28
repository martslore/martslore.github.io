import { Image } from 'primereact/image'

function Hello() {
    return (
        <div className="greeting">
            <h2 className="greeting">
                Hi, I'm Lorenzo <span>👋</span>.
            </h2>
            <h1 className="greeting">
                <b> I develop web applications. </b>
            </h1>
            <h3 className="greeting">
                I'm an Italian who loves to developing digital products.
            </h3>
            <Image
                className="greetingImage"
                src={'https://i.ibb.co/p4cHQ58/IMG-2954.png'}
                alt="Image"
                width="500"
                style={{position:"absolute",top:"-50px"}}
            />
        </div>
    )
}
export default Hello
