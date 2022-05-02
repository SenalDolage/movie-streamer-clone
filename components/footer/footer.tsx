import Link from 'next/link'
import Head from 'next/head'

type Props = {
    title?: string
}

export const Footer = ({ title = 'This is the default title' }: Props) => (
    <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
    </footer>
)
