export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc7fc61e1809552540eec2',
                  title: 'Sanity Studio',
                  name: 'website-3-studio',
                  apiId: 'b3de31d1-a139-4f3a-ad36-77570e0b8d86'
                },
                {
                  buildHookId: '5ffc7fc60b762940f4030f96',
                  title: 'Blog Website',
                  name: 'website-3-web',
                  apiId: 'c8abf381-9e6c-4c75-8d5d-031861788278'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thedarkale/website3',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://website-3-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
