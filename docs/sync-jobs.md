# Brightspace - BSI Sync Jobs

A workflow has been set up to automatically run whenever a new release occurs. The workflow triggers a workflow in the lms called [bsi-sync](https://github.com/Brightspace/lms/blob/master/.github/workflows/bsi-sync.yml) that automatically updates the lms to reference the latest BSI version. `bsi-sync` will automatically create and merge the PR containing the change. 

**Important:** If you have other dependent LMS changes, please make sure you merge those before bumping BSI.

## Release Branches

The `bsi-sync` workflow will only update the configuration to the latest BSI version. Updates to release branches via hotfixes or cert fixes will require a manual update to the `endpoint` entry in [D2L.LP.Web.UI.Html.Bsi.config.json](https://github.com/Brightspace/lms/blob/master/lp/_config/Infrastructure/D2L.LP.Web.UI.Html.Bsi.config.json) on the appropriate branch.
