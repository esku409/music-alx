import { SWRConfig } from 'swr';
import TabsContainer from '../../components/favorites-page/TabsContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { Suspense } from 'react';

const FavoritesPage = () => {
    return (
        <Tabs.Root
            className='page-container tabs-container'
            defaultValue='tracks'
        >
            <Tabs.List className='tablist'>
                <Tabs.Trigger value='tracks'>Tracks</Tabs.Trigger>
                <Tabs.Trigger value='albums'>Albums</Tabs.Trigger>
                <Tabs.Trigger value='artists'>Artists</Tabs.Trigger>
                <Tabs.Trigger value='playlists'>Playlists</Tabs.Trigger>
            </Tabs.List>

            <Suspense fallback={ <div>LOADING...</div>}>
                <SWRConfig
                    value={{
                        fetcher: async ({ entitiesIds, endpoint }) => {
                            const promises = entitiesIds.map(async (id) => {
                                const res = await fetch(endpoint + '/' + id);
                                
                                return res.json();
                            });
                            
                            return await Promise.all(promises);
                        },
                        suspense: true
                    }}
                >
                    <TabsContainer />
                </SWRConfig>
            </Suspense>
        </Tabs.Root>
    );
};

const swrFetcher = async ({ entitiesIds, endpoint }) => {
    
}

export default FavoritesPage;
