import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function Track(): ReactNode {
    return (
        <Layout title="Track" description="Track">
            <main style={{ padding: 0 }}>
                <img
                    src="/img/track.jpg"
                    alt="Track"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </main>
        </Layout>
    );
}