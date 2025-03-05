export interface RelatedProjectsOptions {
  /**
   * If true, does not throw an error when the environment variable is missing or cannot be parsed.
   * @default false
   */
  noThrow?: boolean;
}

export interface VercelRelatedProject {
  /**
   * Vercel project data.
   */
  project: {
    /**
     * The unique identifier of the Vercel project.
     * @example "prj_123456789"
     */
    id: string;

    /**
     * The name of the Vercel project.
     * @example "my-project"
     */
    name: string;
  };
  /**
   * Production deployment aliases.
   */
  production: {
    /**
     * The unique production URL assigned to this deployment.
     * This is autogenerated per deployment.
     *
     * @example "my-project-gsec8n0lp.vercel.sh"
     */
    url?: string;

    /**
     * The primary alias for production deployments.
     * This is the primary domain associated with each production deployment.
     *
     * @example "my-project.com"
     */
    alias?: string;
  };
  /**
   * Preview deployment aliases.
   */
  preview: {
    /**
     * The alias assigned to the preview deployment, based on git the branch name.
     * Consistent across all deployments from the same branch.
     *
     * @example "my-project-git-feature-branch.vercel.sh"
     */
    branch?: string;
  };
}

export type VercelRelatedProjects = VercelRelatedProject[];
